var FBConstants = {
    FACEBOOK_UTIL: 'facebookUtil',
    FIREBASE_UTIL: 'firebaseUtil',
    PROVIDER: 'provider',
    FIREBASE: 'firebase',
    TOKEN_KEY: 'token',
    USER_DATA: 'user'   
}

Object.defineProperty( FBConstants, "FIREBASE_CONSTANT", {
  value: "FIRBASE_CONSTANT_VALUE",
  writable: false,
  enumerable: true,
  configurable: true
});

export default FBConstants;