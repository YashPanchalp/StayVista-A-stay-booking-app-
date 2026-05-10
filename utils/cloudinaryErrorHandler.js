/**
 * Cloudinary Error Handler Utility
 * Centralized error handling for Cloudinary operations
 */

const logger = {
  error: (message, error) => {
    console.error(`[Cloudinary Error] ${message}:`, error.message || error);
  },
  info: (message) => {
    console.log(`[Cloudinary Info] ${message}`);
  },
  warning: (message) => {
    console.warn(`[Cloudinary Warning] ${message}`);
  }
};

/**
 * Validate Cloudinary credentials
 * @returns {Boolean} True if all credentials are present
 */
const validateCredentials = () => {
  const required = [
    'CLOUDINARY_CLOUD_NAME',
    'CLOUDINARY_API_KEY',
    'CLOUDINARY_API_SECRET'
  ];

  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    logger.warning(`Missing Cloudinary credentials: ${missing.join(', ')}`);
    return false;
  }

  logger.info('All Cloudinary credentials validated');
  return true;
};

/**
 * Handle file upload errors gracefully
 * @param {Error} error - The error object
 * @param {String} context - Where the error occurred
 * @returns {Object} Formatted error response
 */
const handleUploadError = (error, context = 'upload') => {
  const errorMessage = error.message || 'Unknown error occurred';
  
  logger.error(`Error during ${context}`, error);

  // Return structured error response
  return {
    success: false,
    error: errorMessage,
    context: context
  };
};

/**
 * Handle Cloudinary deletion errors
 * @param {Error} error - The error object
 * @param {String} publicId - The public ID of the image
 */
const handleDeletionError = (error, publicId) => {
  logger.warning(`Failed to delete image from Cloudinary (ID: ${publicId})`);
  logger.error('Deletion error', error);
  
  // Don't throw - silently log and continue
  // This prevents deletion failures from blocking other operations
};

/**
 * Retry mechanism for failed operations
 * @param {Function} operation - The async operation to retry
 * @param {Number} maxRetries - Maximum number of retry attempts
 * @param {Number} delayMs - Delay between retries in milliseconds
 * @returns {Promise} Result of the operation
 */
const retryOperation = async (operation, maxRetries = 3, delayMs = 1000) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      logger.info(`Attempt ${attempt}/${maxRetries} for operation`);
      return await operation();
    } catch (error) {
      lastError = error;
      logger.warning(`Attempt ${attempt} failed, retrying in ${delayMs}ms...`);
      
      if (attempt < maxRetries) {
        await new Promise(resolve => setTimeout(resolve, delayMs));
      }
    }
  }

  throw new Error(`Operation failed after ${maxRetries} attempts: ${lastError.message}`);
};

module.exports = {
  logger,
  validateCredentials,
  handleUploadError,
  handleDeletionError,
  retryOperation
};
