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


const mockdata = [
  { label: "Khóa học", icon: IconGauge, links: "courses" },
  {
    label: "Ôn tập",
    icon: IconNotes,
    links: "course_review"
  },
  { label: "Bảng xếp hạng", icon: IconPresentationAnalytics, links: "" },
  { label: "Thống kê", icon: IconFileAnalytics, links: "" },
  { label: "Kiểm tra kí hiệu", icon: IconAdjustments, links: "" },
  { label: "Hồ sơ", icon: IconLock, links: "" },
  { label: "Nâng cấp", icon: IconAdjustments, links: "" },
  { label: "Đăng nhập", icon: IconAdjustments, links: "" },
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
