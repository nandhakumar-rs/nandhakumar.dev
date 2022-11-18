export const OL = (props: any) => {
  return <ol className="ml-2 list-decimal list-inside" {...props}>{props.children}</ol>;
};

export const UL = (props: any) => {
  return <ul className="list-disc ml-2 list-inside" {...props}>{props.children}</ul>;
};

export const LI = (props: any) => {
  return <li className="my-2 text-lg" {...props}>{props.children}</li>;
};
