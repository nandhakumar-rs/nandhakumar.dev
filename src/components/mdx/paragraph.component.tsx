const P = (props: any) => {
  return (
    <p className="my-4 text-base leading-relaxed text-app-neutral-700">
      {props.children}
    </p>
  );
};

export default P;
