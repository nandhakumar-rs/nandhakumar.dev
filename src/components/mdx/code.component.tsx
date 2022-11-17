const Code = (props: any) => {
  return (
      <code className="text-lg font-sans text-app-neutral-600 bg-white bg-opacity-10 font-medium rounded px-1 py-0.5" >{props.children}</code>
  );
};

export default Code;
