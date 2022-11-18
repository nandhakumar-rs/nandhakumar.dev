
export const H1 = (props: any) => {
  return (
    <h1 className="text-2xl font-bold text-app-neutral-600 mt-12 mb-6" {...props}>
      {props.children}
    </h1>
  );
};

export const H2 = (props: any) => {
  return (
    <h2 className="text-xl font-bold text-app-neutral-600 mt-12 mb-6" {...props}>
      {props.children}
    </h2>
  );
};

export const H3 = (props: any) => {
  return (
    <h3 className="text-lg font-bold text-app-neutral-600" {...props}>
      {props.children}
    </h3>
  );
};

export const H4 = (props: any) => {
  return (
    <h4 className="text-base font-bold text-app-neutral-600" {...props}>
      {props.children}
    </h4>
  );
};

export const H5 = (props: any) => {
  return (
    <h5 className="text-sm font-bold text-app-neutral-600" {...props}>
      {props.children}
    </h5>
  );
};

export const H6 = (props: any) => {
  return (
    <h6 className="text-xs font-bold text-app-neutral-600" {...props}>
      {props.children}
    </h6>
  );
};
