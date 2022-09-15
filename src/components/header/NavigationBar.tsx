import { Flex } from "../Flex";
import { PageHeadActions } from "./PageHeadActions";
import { RepoTitle } from "./RepoTitle";

export function NavigationBar() {
    return <Flex >
      <>
        <RepoTitle />
        <PageHeadActions />
      </>
    </Flex>
  }
  