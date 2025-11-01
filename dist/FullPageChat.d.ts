/// <reference types="react" />
import type { BotProps } from 'osmi-ai-embed';
type Props = BotProps & {
    style?: React.CSSProperties;
    className?: string;
};
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'osmi-ai-fullchatbot': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
                class?: string;
            };
        }
    }
}
export declare const FullPageChat: ({ style, className, ...assignableProps }: Props) => JSX.Element;
export {};
//# sourceMappingURL=FullPageChat.d.ts.map