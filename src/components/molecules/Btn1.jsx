import styled from "styled-components";
import { Icon } from "../atoms/Icon";

export function Btn1({
    funcion,
    title,
    bgcolor,
    icon,
    url,
    color,
    disabled, width
}) {
    return (
        <Container $width={width}
            disabled={disabled}
            $color={color}
            type="submit"
            $bgcolor={bgcolor}
            onClick={funcion}
        >
            <section className="content">
                <Icon $color={color}>{icon}</Icon>
                {title && (
                    <span className="btn">
                        <a href={url} target="_blank">
                            {title}
                        </a>
                    </span>
                )}
            </section>
        </Container>
    );
}
const Container = styled.button`
    font-weight: 700;
    display: flex;
    font-size: 15px;
    padding: 10px 25px;
    border-radius: 16px;
    background-color: ${(props) => props.$bgcolor};
    border: 2px solid rgba(50, 50, 50, 0.2);
    border-bottom: 5px solid rgba(50, 50, 50, 0.2);
    transform: translate(0, -3px);
    cursor: pointer;
    transition: 0.2s;
    transition-timing-function: linear;
    color: rgb(${(props) => props.$color});
    align-items: center;
    justify-content: center;
    width:${(props) => props.$width};
    .content {
    display: flex;
    gap: 12px;
    }
    &:active {
    transform: translate(0, 0);
    border-bottom: 2px solid rgba(50, 50, 50, 0.5);
    }
    &[disabled] {
    background-color: #646464;
    cursor: no-drop;
    box-shadow: none;
    }
`;