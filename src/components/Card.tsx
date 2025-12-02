import Image from "next/image";
import { Newsletter } from "@/types/newsletter";
import { User } from "@/types/user";
import Button from "./Button";
import styled from "styled-components";

type CardProps = {
  newsletter: Newsletter;
  user: User;
};

const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 15px;
  font-size: 16px;
  line-height: 26px;
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  gap: 8px;
  aspect-ratio: 302 / 201;
  overflow: hidden;
  background-color: #CECECE;

  img {
    position: relative;
    border-radius: 8px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  h3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    color: white;
    text-shadow: 1px 1px 1px #0000004D;
  }
`;

export default function Card({ newsletter, user }: CardProps) {
  const hasAccess =
    newsletter.subscriptions.length === 0 ||
    newsletter.subscriptions.some((sub) => user.subscriptions.includes(sub));

  return (
    <StyledCard>
      <StyledFigure>
        <Image src={newsletter.image} alt={newsletter.title} width={150} height={150} />
        <figcaption>
          <h3 >{newsletter.title}</h3>
        </figcaption>
      </StyledFigure>
      <p>{newsletter.description}</p>
      <Button color={hasAccess ? "primary" : "secondary"}>
        {hasAccess ? "S'inscrire" : "S'abonner"}
      </Button>
    </StyledCard>
  );
}
