export const H1 = (props: any) => {
  return (
    <h1
      className="mt-12 mb-6 text-2xl font-bold text-app-primary-100 sm:text-3xl"
      {...props}
    >
      {props.children}
    </h1>
  );
};

export const H2 = (props: any) => {
  return (
    <h2
      className="mt-12 mb-5 text-xl font-bold text-app-primary-100 sm:text-2xl"
      {...props}
    >
      {props.children}
    </h2>
  );
};

export const H3 = (props: any) => {
  return (
    <h3
      className="mt-8 mb-3 text-lg font-bold text-app-neutral-600"
      {...props}
    >
      {props.children}
    </h3>
  );
};

export const H4 = (props: any) => {
  return (
    <h4
      className="mt-6 mb-2 text-base font-bold text-app-neutral-600"
      {...props}
    >
      {props.children}
    </h4>
  );
};

export const H5 = (props: any) => {
  return (
    <h5 className="mt-4 mb-2 text-sm font-bold text-app-neutral-600" {...props}>
      {props.children}
    </h5>
  );
};

export const H6 = (props: any) => {
  return (
    <h6 className="mt-4 mb-2 text-xs font-bold text-app-neutral-600" {...props}>
      {props.children}
    </h6>
  );
};
