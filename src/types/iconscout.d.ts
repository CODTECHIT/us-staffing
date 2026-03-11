declare module '@iconscout/react-unicons' {
  import { FC, SVGProps } from 'react';
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
  }

  export const UilUsersAlt: FC<IconProps>;
  export const UilGlobe: FC<IconProps>;
  export const UilBriefcase: FC<IconProps>;
  export const UilBriefcaseAlt: FC<IconProps>;
  export const UilHardHat: FC<IconProps>;
  export const UilFileAlt: FC<IconProps>;
  export const UilSearch: FC<IconProps>;
  export const UilSuitcase: FC<IconProps>;
  export const UilMapPin: FC<IconProps>;
  export const UilLayerGroup: FC<IconProps>;
  export const UilAngleDown: FC<IconProps>;
  export const UilDesktop: FC<IconProps>;
  export const UilHeartbeat: FC<IconProps>;
  export const UilDollarSign: FC<IconProps>;
  export const UilSetting: FC<IconProps>;
  export const UilBuilding: FC<IconProps>;
  export const UilClipboardAlt: FC<IconProps>;
  export const UilShieldCheck: FC<IconProps>;
  export const UilCalendarAlt: FC<IconProps>;
  export const UilCheckCircle: FC<IconProps>;
  export const UilCheck: FC<IconProps>;
  export const UilBars: FC<IconProps>;
  export const UilTimes: FC<IconProps>;
  export const UilFacebookF: FC<IconProps>;
  export const UilTwitter: FC<IconProps>;
  export const UilInstagram: FC<IconProps>;
  export const UilLinkedin: FC<IconProps>;
  export const UilBell: FC<IconProps>;
  export const UilUpload: FC<IconProps>;
  export const UilAngleRight: FC<IconProps>;
  export const UilEnvelopeAlt: FC<IconProps>;
  export const UilAngleLeftB: FC<IconProps>;
}

declare module '@iconscout/react-unicons-solid' {
  import { FC, SVGProps } from 'react';
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
  }

  export const UisStopwatch: FC<IconProps>;
  export const UisBriefcase: FC<IconProps>;
  export const UisCheckCircle: FC<IconProps>;
  export const UisUsersAlt: FC<IconProps>;
  export const UisGlobe: FC<IconProps>;
}

declare module '@iconscout/react-unicons/icons/*' {
  import { FC } from 'react';
  const content: FC<any>;
  export default content;
}

declare module '@iconscout/react-unicons-solid/icons/*' {
  import { FC } from 'react';
  const content: FC<any>;
  export default content;
}
