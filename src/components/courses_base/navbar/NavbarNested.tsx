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
  IconSquareChevronRight
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
  { label: "Bảng xếp hạng", icon: IconPresentationAnalytics, links: "" },
  { label: "Thống kê", icon: IconFileAnalytics, links: "" },
  { label: "Kiểm tra kí hiệu", icon: IconAdjustments, links: "camera" },
  { label: "Hồ sơ", icon: IconLock, links: "" },
  { label: "Nâng cấp", icon: IconAdjustments, links: "" },
  { label: "Đăng nhập", icon: IconAdjustments, links: "" },
];

export function NavbarNested() {

  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  const [isOpened, setIsOpened] = useState(true);

  const handleClickBtn = () => {
    setIsOpened(!isOpened);
    console.log(isOpened);
  }

  // recommend: xử lý bằng 1 cái styles động, tức là thêm class theo điều kiện

  // const handleOpened = () => {
  //   if (isOpened) {
  //     return {
  //       transform: "translateX(0)",
  //     }
  //   } else {
  //     return { transform: "translateX(-100%)", width: "0px" }
  //   }
  // }


  return (
    <div>
      <Button className={classes.toggle} onClick={() => handleClickBtn()}>
        <IconMenu2 style={{ color: "black" }}></IconMenu2>
      </Button>

      <nav className={`${classes.navbar} ${isOpened ? classes.navOuline : classes.navInline}`}

      // style={handleOpened()}navInline
      >

        <ScrollArea className={classes.links} >
          <div className={classes.linksInner}>{links}</div>
        </ScrollArea>
      </nav>
    </div>
  );
}
