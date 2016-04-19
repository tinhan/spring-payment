package com.test.payment.shared

/**
 * Created by naga on 15/03/29.
 */
class ResourceNotFoundException extends RuntimeException {

    public ResourceNotFoundException() {
        super()
    }

    public ResourceNotFoundException(String message) {
        super(message)
    }
}
