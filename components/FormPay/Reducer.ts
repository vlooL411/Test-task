import { useReducer } from "react";

import { LocationT } from "./Address/Location";
import Shipping from "./Shipping";

export namespace FormPay {
  type CommonPay = {
    fullName?: string;
    location?: LocationT;
  };

  type State = {
    base?: {
      phone: string;
      email: string;
      Shipping: CommonPay;
      Billing: CommonPay;
    };
  };

  export enum Action {
    Shipping,
    Billing,
    BillingCpyShipping,
  }

  let lastState: State = {
    base: {
      phone: null,
      email: null,
      Shipping: {},
      Billing: {},
    },
  };

  const reducer = (state: State, action: Action): State => {
    switch (action) {
      case Action.Shipping:
        return { ...state };
      case Action.BillingCpyShipping:
        if (state?.base?.Shipping)
          state.base.Billing = { ...state?.base?.Shipping };
        return { ...state };
      default:
        return lastState;
    }
  };

  const Reducer = (state: State, action: Action): State =>
    (lastState = reducer(state, action));

  export const UseReducer = () => useReducer(Reducer, lastState, undefined);
}
