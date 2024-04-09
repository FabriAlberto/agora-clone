import { MasterDictionaryType } from "@/context/main.context";

type Props = {
  dictionary: MasterDictionaryType["blogs"];
};
const BlogsSectionHeader = ({ dictionary }: Props) => {
  return (
    <div className="mb-5 flex w-full flex-wrap justify-between">
      <div className="md-p-20 mt-2 w-full bg-secondary p-10 md:w-[60%] md:rounded-xl ">
        <p className="mb-3 text-sm font-medium text-white">{dictionary.subtitle_header_card}</p>
        <p className="text-3xl font-semibold text-white">{dictionary.title_header_card}</p>
      </div>

      <div className=" mt-2 min-h-[280px] w-full bg-success bg-[url('https://agora2030.org/wp-content/uploads/2022/10/Frame-348.png')] bg-center	p-10 md:w-[38%] md:rounded-xl"></div>
    </div>
  );
};

export default BlogsSectionHeader;
