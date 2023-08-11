import React from 'react';
import { Card, CardContent, Divider } from '@mui/material';
import { theme as twinTheme } from 'twin.macro';
import { DateTime } from 'luxon';

import Image from '@/components/Common/Image';
import { Images } from '@/components/Icons/Images';
import { useColorMode } from '@/providers/ColorModeProvider';
import ArticleModel from '@/interfaces/article.interface';
import Headline from '@/components/Common/Base/Headline';
import Text from '@/components/Common/Base/Text';

const DatePosted = (props: any) => {
  const { datePosted } = props;
  let dateFormatted = DateTime.fromISO(datePosted);
  return (
    <>
      <Headline variant="h5" component="h6" align="right" tw="font-medium">
        {dateFormatted.daysInMonth}
      </Headline>
      <Text variant="body2" align="right" tw="mt-1 font-bold">
        {dateFormatted.monthLong + ' ' + dateFormatted.year}
      </Text>
    </>
  );
};

interface Props {
  source?: string;
  article?: ArticleModel;
}

export default function VerticalCard(props: Props) {
  const { source, article } = props;

  const { colorMode } = useColorMode();

  return (
    <div tw="w-full p-2">
      <Card
        sx={{
          border: `1px solid ${
            colorMode === 'dark' ? twinTheme`colors.neutral.300` : twinTheme`colors.gray.200`
          }`,
        }}
        tw="rounded shadow-md"
      >
        <Image alt="" ratio="4/3" src={source ? source : Images.AltImageSecondary} />
        <CardContent>
          <div tw="space-y-4">
            <div tw="w-full flex flex-row space-x-2">
              <div tw="w-full line-clamp-2">
                <Headline variant="h5" component="h6">
                  {article?.title}
                </Headline>
              </div>
              <div tw="w-6/12">
                <DatePosted datePosted={article?.datePosted} />
              </div>
            </div>

            <Divider />

            <div tw="w-full flex flex-row space-x-1">
              <Text variant="body2" component="span">
                {article?.author}
              </Text>
              <Text variant="body2" component="span">
                &#8226;
              </Text>
              <Text variant="body2" component="span">
                6 min read
              </Text>
              <Text variant="body2" component="span">
                &#8226;
              </Text>
              <Text variant="body2" component="span">
                {article?.topic}
              </Text>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
