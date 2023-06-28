import Version from '../../../version/models/entities/Version';
import IApplicationDTO from '../../dtos/IApplicationDTO';
import {
  Entity,
  Column,
  Generated,
  UpdateDateColumn,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
  JoinColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export default class Application implements IApplicationDTO {
  @Column({ primary: true, unique: true })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  application_name: string;

  @Column({ nullable: false })
  icon: string;

  @Column({ nullable: false, length: 500 })
  description: string;

  @Column({ nullable: false, default: 'ITEX' })
  organization: string;

  @Column({ nullable: false })
  latest_version: string;

  @Column({ nullable: false, unique: true })
  package_name: string;

  @Column({ nullable: false })
  platform: string;

  @Column({ nullable: false })
  program_file_name: string;

  @Column({ nullable: false })
  program_file_version: string;

  @Column({ nullable: false, default: 'ACTIVE', enum: ['INACTIVE', 'ACTIVE'] })
  status: string;

  @OneToMany(() => Version, (version) => version.application, {
    cascade: ['insert', 'remove', 'update'],
  })
  @JoinColumn({ name: 'versions', referencedColumnName: 'version_no' })
  versions: Version[];

  @Column({ nullable: false, default: false })
  shareToSubOrganization: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
