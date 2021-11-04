
  // printLoginState(state: LoginState)
  // success -> 🎉 body
  // fail -> 😭 reason
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  // function printLoginState(state: LoginState) {
  //   if('response' in state) {

  //   }
  // }