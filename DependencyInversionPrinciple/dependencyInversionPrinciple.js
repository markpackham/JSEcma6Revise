/*
Learn about Dependency Inversion Principle from
https://www.youtube.com/watch?v=9oHY5TllWaU
*/

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

// PayPal and Stripe take payments in very different manners
// So we need seperate Payment Processors
// that way we aren't limited by Stripe and PayPal's ways of doing things

class StripePaymentProcessor {
  constructor(user) {
    this.stripe = new Stripe(user);
  }

  pay(amountInDollars) {
    this.stripe.makePayment(amountInDollars * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amountInCents / 100} with Stripe`
    );
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amountInDollars) {
    this.paypal.makePayment(this.user, amountInDollars);
  }
}

class Paypal {
  makePayment(user, amountInDollars) {
    console.log(`${user} made payment of $${amountInDollars} with Paypal`);
  }
}

const store = new Store(new StripePaymentProcessor("John"));
store.purchaseBike(2);
store.purchaseHelmet(2);
const store2 = new Store(new PaypalPaymentProcessor("Tim"));
store2.purchaseBike(5);
store2.purchaseHelmet(3);
