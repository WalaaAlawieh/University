import styled from "styled-components";
import tw from "twin.macro";

export const LayoutWrapper = styled("div")`
  ${tw`min-h-screen flex flex-col bg-no-repeat bg-cover md:flex-row`}
  background-color:  #F7F6FB; // TODO: theme

  .banner-wrapper {
    ${tw`p-3 m-auto flex justify-center items-center`}

    .banner-inner-wrapper {
      ${tw`md:hidden`}

      .logo-mobile {
        ${tw`w-full block md:hidden object-cover my-5 mx-auto`}
        max-width: 12rem;
        height: auto;
      }

      .title {
        ${tw`text-center leading-snug mt-3`}
        color: ${({ theme }) => theme.white};
      }

      .description {
        ${tw`text-center font-bold`}
        color: #d1d5db;
      }
    }

    .banner-image {
      ${tw`hidden md:block md:object-cover md:max-w-md md:w-full`}
    }
  }

  .form-wrapper {
    ${tw`px-5 py-5 md:(w-7/12 relative) rounded-t-lg md:(order-first rounded-none) flex flex-col justify-between md:items-center`}

    background: ${({ backgroundColor, theme }) =>
      backgroundColor ? backgroundColor : "#f8fafc"};

    width: 29%;
    min-width: 18rem;

    .logo-desktop {
      ${tw`hidden md:block m-5 self-start`}

      max-width: 4.5rem;
      height: auto;
    }

    .form {
      ${tw`absolute rounded-lg`}

      -webkit-box-shadow: 0px 3px 5px 0px rgb(0 0 0 / 1%),
        0 2px 4px -1px rgb(0 0 0 / 1%);
      -moz-box-shadow: 0px 3px 5px 0px rgb(0 0 0 / 1%),
        0 2px 4px -1px rgb(0 0 0 / 1%);
      box-shadow: 0px 3px 5px 0px rgb(0 0 0 / 1%),
        0 2px 4px -1px rgb(0 0 0 / 1%);

      background-color: rgb(255 255 255 / 33%);

      top: 25%;

      padding: 0.75rem;

      width: 50%;

      left: 30%;

      .form-content {
        ${tw`p-10 rounded-lg`}
        -webkit-box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 10%),
          0 2px 4px -1px rgb(0 0 0 / 6%);
        -moz-box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 10%),
          0 2px 4px -1px rgb(0 0 0 / 6%);
        box-shadow: 0px 3px 5px 2px rgb(0 0 0 / 10%),
          0 2px 4px -1px rgb(0 0 0 / 6%);

        background-color: #f8fafc;

        .title-wrapper {
          ${tw`hidden md:block md:mb-8`}

          .title {
            ${tw`leading-tight`}
          }

          .description {
            ${tw`text-center font-bold`}
            color: #94a3b8;
          }
        }
      }
    }

    .by-cogent {
      ${tw`w-full flex flex-col items-center mt-2 `}
      font-size:13px;

      .cogent-link {
        color: ${({ theme }) => theme.primary};
        ${tw`font-medium`}

        -webkit-transition: font-size 0.3s;
        -moz-transition: font-size 0.3s;
        -o-transition: font-size 0.3s;
        transition: font-size 0.3s;

        &:hover {
          font-size: 14.5px;
        }
      }
    }
  }
`;
