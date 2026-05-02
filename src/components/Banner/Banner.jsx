import Container from "../shared/Container";
import StatCard from "../StatCard/StatCard";

const Banner = () => {
  return (
    <div className="my-10">
      <Container>
        <div className="flex gap-5">
          <StatCard
            title={"In Progress"}
            count={0}
            gradientBg={"bg-gradient-to-br from-[#632ee3] to-[#9f62f2]"}
          ></StatCard>
          <StatCard
            title={"Resolved"}
            count={0}
            gradientBg={"bg-gradient-to-r from-[#54cf68] to-[#01827b]"}
          ></StatCard>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
