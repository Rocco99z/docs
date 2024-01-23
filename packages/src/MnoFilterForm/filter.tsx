import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';
import React from 'react';
import Icon from '@ant-design/icons';

export const FilterSvg = () => (
  <svg
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="currentColor"
  >
    <path d="M640 1024a64 64 0 0 1-28.8-7.04l-256-128A64 64 0 0 1 320 832V532.48L12.16 101.12a64 64 0 0 1-5.12-64A64 64 0 0 1 64 0h896a64 64 0 0 1 56.96 34.56 64 64 0 0 1-5.12 64L704 532.48V960a64 64 0 0 1-64 64z m-192-231.68l128 64V512a60.16 60.16 0 0 1 12.16-37.12L835.84 128H188.16l247.68 346.88A60.16 60.16 0 0 1 448 512v280.32z"></path>
  </svg>
);
export const IconWrap = (
  props: Partial<CustomIconComponentProps> & {
    component: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  },
) => <Icon {...props} />;
export const FilterIcon = () => <IconWrap component={FilterSvg} />;
