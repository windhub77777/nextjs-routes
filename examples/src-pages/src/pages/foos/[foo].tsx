import { NextPage } from "next";
import { useRouter } from "nextjs-routes/router";

const Foo: NextPage = () => {
  const router = useRouter<"/foos/[foo]">();
  const { foo } = router.query;
  return <div>Foo: {foo}</div>;
};

export default Foo;
