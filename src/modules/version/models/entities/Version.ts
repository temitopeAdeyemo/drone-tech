import Application from '../../../application/models/entities/Application';
import ApplicationRepository from '../../../application/models/repositories/ApplicationRepository';
import IVersionDTO from '../../dtos/IVersionDTO';
import {
  Entity,
  Column,
  Generated,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export default class Version implements IVersionDTO {
  @Column({ primary: true, unique: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  version_name: string;

  @Column({ nullable: false })
  md5_encoding: string;

  @Column({ nullable: false })
  package_name: string;

  @Column({ nullable: false, default: true })
  latest: boolean;

  @Column({ nullable: true })
  screenshots: string;

  @Column({ nullable: false, length: 500 })
  description: string;

  @Column({ nullable: false })
  build_number: string;

  @Column({ nullable: false })
  version_no: string;

  @Column({ type: 'text', array: true, default: [] })
  compatible_model_names: string[];

  @Column({ nullable: true, default: '0' })
  download_no: string;

  @Column({ nullable: false })
  file_extension: string;

  @Column({ nullable: false, default: false })
  active: boolean;

  @ManyToOne(() => Application, (application) => application.versions, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'application_id', referencedColumnName: 'id' })
  application: Application;

  @Column({ nullable: false })
  application_name: string;

  @Column({ nullable: false, unique: true })
  file_url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @BeforeInsert()
  async addVersion() {
    if (!this.application) {
      const appRepo = new ApplicationRepository();
      const application = await appRepo.findOneByPackageName(this.package_name);
      if (application) {
        this.application = application;
        this.application_name = application.application_name;
      }
    }
    return this;
  }
}
