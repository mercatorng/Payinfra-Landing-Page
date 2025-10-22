export const Input = ({ title, placeholder, onChange }: any) => {
  const id = `input-${
    title ? title.replace(/\s+/g, "-").toLowerCase() : "field"
  }`;
  return (
    <div className="flex flex-col text-start gap-2">
      <label htmlFor={id} className="font-medium ">
        {title}
      </label>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        onChange={onChange}

        className="flex-1 border border-primary py-2 px-5 rounded-[22px] focus:border-primary "
      />
    </div>
  );
};
