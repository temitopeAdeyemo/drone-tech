import { Request, Response, NextFunction } from 'express';
import { CelebrateError } from 'celebrate';
import { AxiosError, isAxiosError } from 'axios';
import AppError from '../utils/AppError';
import { MulterError } from 'multer';
import { BaseError, QueryError, ValidationError } from 'sequelize';

export default function errorHandler(error: Error, request: Request, response: Response, _: NextFunction): Response {
  console.log(error);
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      success: false,
      message: error.message,
      data: null,
    });
  }

  if (error instanceof CelebrateError) {
    const bodyMessage = error.details.get('body')?.message;
    const queryMessage = error.details.get('query')?.message;
    const paramsMessage = error.details.get('params')?.message;
    const headersMessage = error.details.get('headers')?.message;

    return response.status(400).json({
      success: false,
      message: bodyMessage || queryMessage || paramsMessage || headersMessage,
      data: null,
    });
  }

  if (error instanceof AxiosError) {
    return response.status(error.response?.status || 502).json({
      success: false,
      message: error.message || 'UPSTREAM_SERVER_ERROR',
      data: error.response?.data || null,
    });
  }

  if (error instanceof MulterError && error.code === 'LIMIT_UNEXPECTED_FILE') {
    return response.status(400).json({
      success: false,
      message: `${error.message} ${error.field}, max image uploads allowed are 2.`,
      data: null,
    });
  }

  if (error instanceof BaseError || error instanceof QueryError || error instanceof ValidationError) {
    return response.status(400).json({
      success: false,
      message: error.message || 'Unexpected error.',
      data: null,
    });
  }

  return response.status(500).json({
    success: false,
    message: 'Internal server error',
    data: null,
  });
}
