import type {
  Home$Api,
  Home$Api$MainNews$News,
} from '@/types/main-page/mod.ts';
import type { ValidatorResult } from '@/types/validator/mod.ts';

export const validateMainNews = ({ mainNews }: Home$Api): ValidatorResult => {
  const {
    templatedNews: { items: topNewses },
    subNewsItems: subNewses,
  } = mainNews;

  const invalidNews: Home$Api$MainNews$News[] = topNewses
    .concat(subNewses)
    .filter(
      ({
        id,
        thumbnail,
        title,
        leadText,
        registerDateTime,
        mediaName,
        category,
        subCategory,
      }) => {
        if (
          typeof id !== 'string' ||
          typeof thumbnail !== 'string' ||
          typeof title !== 'string' ||
          typeof leadText !== 'string' ||
          typeof registerDateTime !== 'string' ||
          typeof mediaName !== 'string' ||
          typeof category !== 'string' ||
          typeof subCategory !== 'string'
        )
          return true;

        if (
          id.length === 0 ||
          title.length === 0 ||
          registerDateTime.length === 0 ||
          mediaName.length === 0
        )
          return true;

        if (!/^https\:\/\/static\.news\.zumst\.com\/images\//.test(thumbnail))
          return true;

        try {
          new Date(registerDateTime).toLocaleString();
        } catch {
          return true;
        }

        return false;
      }
    );

  return {
    isValid:
      topNewses.length >= 2 &&
      subNewses.length >= 6 &&
      invalidNews.length === 0,
    message: '오늘의 주요뉴스: 뉴스 개수 및 뉴스별 속성값 확인',
    values: { invalidNews, topNewses, subNewses },
  };
};
