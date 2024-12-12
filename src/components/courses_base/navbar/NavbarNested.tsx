"use client";
import { Group, Code, ScrollArea, rem, Button, UnstyledButton } from "@mantine/core";
import {
  IconNotes,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
  IconMenu2,
  IconPictureInPictureOff,
  IconX,
  IconSquareChevronRight,
  IconBook2,
  IconTransfer
} from "@tabler/icons-react";
import { LinksGroup } from "./NavbarLinksGroup/NavbarLinksGroup";
import classes from "./NavbarNested.module.css";
import { useState } from "react";


const mockdata = [
  { label: "Khóa học", icon: IconPictureInPictureOff, links: "courses" },
  {
    label: "Ôn tập",
    icon: IconNotes,
    links: "course_revise"
  },
  { label: "Bảng xếp hạng", icon: IconPresentationAnalytics, links: "rank" },
  { label: "Kiểm tra kí hiệu", icon: IconAdjustments, links: "camera" },
  { label: "Phiên dịch", icon: IconTransfer, links: "translate" },
  { label: "Từ điển", icon: IconBook2, links: "dictionary" },

];

export function NavbarNested() {

  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  const [isOpened, setIsOpened] = useState(true);

  const handleClickBtn = () => {
    setIsOpened(!isOpened);
  }


  return (
    <div>
      <Button className={classes.toggle} onClick={() => handleClickBtn()}>
        <IconMenu2 style={{ color: "black" }}></IconMenu2>
      </Button>

      <nav className={`${classes.navbar} ${isOpened ? classes.navOuline : classes.navInline}`}
      >

        <ScrollArea className={classes.links} >
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
      </nav>
    </div>
  );
}
