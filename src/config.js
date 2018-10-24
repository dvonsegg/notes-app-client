export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "sinaz-notes-apps-uploads",
      BUCKET: "us-east-1"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://1e9lijdiu6.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_kh7PCsw6g",
      APP_CLIENT_ID: "5tupi4v0e1p9anvoen0cfq3b3j",
      IDENTITY_POOL_ID: "us-east-1:5e54d900-d7f6-4013-90c4-8d8a4dc7f107"
    }
  };