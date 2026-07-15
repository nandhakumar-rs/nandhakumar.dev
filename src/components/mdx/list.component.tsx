export const OL = (props: any) => {
  return (
    <ol
      className="my-4 ml-5 list-outside list-decimal space-y-2 text-app-neutral-700 marker:text-app-neutral-800"
      {...props}
    >
      {props.children}
    </ol>
  );
};

export const UL = (props: any) => {
  return (
    <ul
      className="my-4 ml-5 list-outside list-disc space-y-2 text-app-neutral-700 marker:text-app-neutral-800"
      {...props}
    >
      {props.children}
    </ul>
  );
};

export const LI = (props: any) => {
  return (
    <li className="text-base leading-relaxed" {...props}>
      {props.children}
    </li>
  );
};
