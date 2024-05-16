import CustomButton from "./CustomButton";
import Wrapper from "./Wrapper";

const CustomDashboardCrud = ({
  title,
  operationFn,
}: {
  title: string;
  operationFn: () => void;
}) => {
  return (
    <Wrapper style="">
      <CustomButton
        title={title}
        style="bg-blue-700 rounded-lg font-medium text-center text-sm text-white px-4 py-2.5"
        handleClick={() => operationFn}
      />
    </Wrapper>
  );
};

export default CustomDashboardCrud;
