export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational: boolean;
  public readonly details?: any;

  constructor(
    message: string,
    statusCode: number,
    isOperational: boolean,
    details?: any
  ) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this);
  }
}

//Not Found Error

export class NotFoundError extends AppError {
  constructor(message = 'Resource not found!') {
    super(message, 404, true);
  }
}

//Validation Error (used for Joi/zod/react-hook-form validation errors)

export class ValidationError extends AppError {
  constructor(message: 'Invalid request data', details?: any) {
    super(message, 400, true, details);
  }
}

//Authentication Error

export class AuthError extends AppError {
  constructor(message: 'unauthorized', details?: any) {
    super(message, 401, true, details);
  }
}

//Forbidden Error (For insufficient permissions)

export class ForbiddenError extends AppError {
  constructor(message: 'Forbidden Access') {
    super(message, 403, true);
  }
}

//Database Error (for mongo Db and postgreSQL Error)

export class DatabaseError extends AppError {
  constructor(message: 'Database Error', details?: any) {
    super(message, 500, details);
  }
}

// Rate Limit Error (if user exceeds API limits)

export class RateLimitError extends AppError {
  constructor(message: 'Too many requests, Please try again later') {
    super(message, 429, true);
  }
}
