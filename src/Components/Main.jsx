import React from "react";

const Main = () => {
  return (
    <div>
      <h1>Question 1 . High Order Component in react js ?</h1>
      <h4>
        A higher-order component (HOC) is an advanced technique in React for
        reusing component logic. HOCs are not part of the React API, per se.
        They are a pattern that emerges from React’s compositional nature.
        Concretely, a higher-order component is a function that takes a
        component and returns a new component.
      </h4>
      <h3>const EnhancedComponent = higherOrderComponent(WrappedComponent);</h3>
      <h1>
        Question 2.Do you know about SEO ? Is it true that react js supports SEO
        support{" "}
      </h1>
      <h4>
        Search engine optimisation (SEO) is the process of improving the quality
        and quantity of website traffic to a website or a web page from search
        engines. SEO targets unpaid traffic (known as “natural” or “organic”
        results) rather than direct traffic or paid traffic. React helps build a
        very user-friendly UI that is also valuable by SEO, so you definitely
        shouldn't avoid it while creating a user interface for your app/website.
        However, you should use some tricks to ensure that your React-site is
        understandable for Google crawlers and, therefore, good for SEO.
      </h4>
      <h1>Question 3. clean up in useEffect</h1>
      <h4>
        clean up function: this function gets executed when the component is
        unmounted from the screen. This is mostly used for memory leaks.
      </h4>
      <h1>Question 4. What is the use of useMemo and useCallback?</h1>
      <h2>UseMemo</h2>
      <h4>
        React has a built-in hook called useMemo that allows you to memoize
        expensive functions so that you can avoid calling them on every render.
        You simple pass in a function and an array of inputs and useMemo will
        only recompute the memoized value when one of the inputs has changed.
      </h4>
      <h2>useCallback</h2>
      <h4>
        useCallback will return a memoized version of the callback that only
        changes if one of the dependencies has changed. This is useful when
        passing callbacks to optimized child components that rely on reference
        equality to prevent unnecessary renders.
      </h4>
      <h1>Question 5. Why do we need keys in react less?</h1>
      <h4>
        The main purpose of keys is to help React differentiate and distinguish
        elements from each other, increasing its performance when diffing
        between the virtual and real DOM.
      </h4>
      <h1>Question 6. Do you know about redux?</h1>
      <h4>
        Redux is a pattern and library for managing and updating application
        state, using events called "actions". It serves as a centralized store
        for state that needs to be used across your entire application, with
        rules ensuring that the state can only be updated in a predictable
        fashion. Here is a small example of react and Redux application. You can
        also try developing small apps. Sample code for increase or decrease
        counter is given below − This is the root file which is responsible for
        the creation of store and rendering our react app component. /src/index.
      </h4>
    </div>
  );
};

export default Main;
