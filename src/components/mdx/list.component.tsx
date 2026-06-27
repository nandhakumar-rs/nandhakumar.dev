export const OL = (props: any) => {
  return <ol className="ml-2 list-decimal list-inside" {...props}>{props.children}</ol>;
};

export const UL = (props: any) => {
  return <ul className="ml-4 list-inside" {...props}>{props.children}</ul>;
};

export const LI = (props: any) => {
  return <li className="my-2 text-base" {...props}>{props.children}</li>;
};
