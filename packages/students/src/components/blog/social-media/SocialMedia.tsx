import { Button } from '@applyfuture/ui';
import { toast } from '@applyfuture/utils';
import { faFacebookF, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/pro-solid-svg-icons';
import { faLink } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton
} from 'react-share';

type Props = {
    url: string;
};

const SocialMedia: FC<Props> = (props) => {
    const { url } = props;

    const copyURL = async () => {
        await navigator.clipboard.writeText(location.href);
        toast({
            title: 'Link copied to clipboard',
            variant: 'success'
        });
    };

    return (
        <div className="flex items-center space-x-3">
            <Button variant="rounded" onClick={copyURL}>
                <FontAwesomeIcon fixedWidth className="text-white" icon={faLink} size="sm" />
            </Button>
            <EmailShareButton
                body={'Hey,\nI just found this awesome blog post.\nI hope you will like it.\nCiao '}
                separator=" - "
                subject={'Check this awesome post!'}
                url={`https://www.applyfuture.com/fr/${url}`}>
                <div className="flex items-center justify-center w-7 h-7 hover:bg-indigo-500 bg-indigo-600 rounded-full">
                    <div className="flex items-center justify-center h-full">
                        <FontAwesomeIcon
                            fixedWidth
                            className="text-white"
                            icon={faEnvelope}
                            size="sm"
                        />
                    </div>
                </div>
            </EmailShareButton>
            <LinkedinShareButton url={`https://www.applyfuture.com/fr`}>
                <div className="flex items-center justify-center w-7 h-7 hover:bg-indigo-500 bg-indigo-600 rounded-full">
                    <div className="flex items-center justify-center h-full">
                        <FontAwesomeIcon
                            fixedWidth
                            className="text-white"
                            icon={faLinkedin}
                            size="sm"
                        />
                    </div>
                </div>
            </LinkedinShareButton>
            <TwitterShareButton
                hashtags={['ApplyFuture', 'Blog']}
                url={`https://www.applyfuture.com/fr/${url}`}>
                <div className="flex items-center justify-center w-7 h-7 hover:bg-indigo-500 bg-indigo-600 rounded-full">
                    <div className="flex items-center justify-center h-full">
                        <FontAwesomeIcon
                            fixedWidth
                            className="text-white"
                            icon={faTwitter}
                            size="sm"
                        />
                    </div>
                </div>
            </TwitterShareButton>
            <FacebookShareButton url={`https://www.applyfuture.com/fr/${url}`}>
                <div className="flex items-center justify-center w-7 h-7 hover:bg-indigo-500 bg-indigo-600 rounded-full">
                    <div className="flex items-center justify-center h-full">
                        <FontAwesomeIcon
                            fixedWidth
                            className="text-white"
                            icon={faFacebookF}
                            size="sm"
                        />
                    </div>
                </div>
            </FacebookShareButton>
        </div>
    );
};

export default SocialMedia;
