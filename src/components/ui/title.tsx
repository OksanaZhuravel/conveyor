export interface ContentTabProps {
  title: string;
  titleAccent?: string;
}

export const Title = ({ title, titleAccent }: ContentTabProps) => {
  return (
    <h2 className="font-montserrat flex flex-col items-center pb-5 text-5xl leading-13 font-bold">
      {title}
      <span className="font-montserrat text-accent text-5xl leading-13 font-bold">
        {titleAccent}
      </span>
    </h2>
  );
};
