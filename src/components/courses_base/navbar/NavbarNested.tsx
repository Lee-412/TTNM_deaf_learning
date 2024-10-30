"use client";
import { Group, Code, ScrollArea, rem } from "@mantine/core";
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from "@tabler/icons-react";
import { LinksGroup } from "./NavbarLinksGroup/NavbarLinksGroup";
import classes from "./NavbarNested.module.css";
import Link   from 'next/link';


const mockdata = [
  { label: "Khóa học", icon: IconGauge,  },
  {
    label: "Ôn tập",
    icon: IconNotes
  },
  {
    label: "Ngôn ngữ",
    icon: IconCalendarStats,
    links: [
      { label: "Việt Nam", link: "/" },
      { label: "Previous releases", link: "/" },
      { label: "Releases schedule", link: "/" },
    ],
  },
  { label: "Bảng xếp hạng", icon: IconPresentationAnalytics },
  { label: "Thống kê", icon: IconFileAnalytics },
  { label: "Kiểm tra kí hiệu", icon: IconAdjustments },
  {
    label: "Khác",
    icon: IconLock,
    links: [
      { label: "Hồ sơ", link: "/" },
      { label: "Nâng cấp", link: "/" },
      { label: "Đăng nhập", link: "/" },
    ],
  },
];

export function NavbarNested() {
  
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <nav className={classes.navbar}>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </nav>
  );
}
