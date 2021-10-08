import LandingLayout from '@components/layouts/landing-layout/LandingLayout';
import Post from '@pages/blog/[slug]';
import { render, screen } from '@testing-library/react';
import { FC } from 'react';

jest.mock('next/router', () => ({
    useRouter() {
        return {
            locale: 'en'
        };
    }
}));

const MockedLandingLayout: FC = (props) => {
    return <div>{props.children}</div>;
};

jest.mock('@components/layouts/landing-layout/LandingLayout', () => ({
    __esModule: true,
    default: jest.fn()
}));

((LandingLayout as unknown) as any).mockImplementation(MockedLandingLayout);

describe('Posts', () => {
    it('can render without crashing', () => {
        const post = {
            author: {
                name: 'Arthur Sallé',
                picture:
                    'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
            },
            description:
                'Inmitem saucius deum ait Epidauria modo. Contraque longa quasque verbere miratur vultus Lorem markdownum pontusque tinctas...',
            id: 1,
            image:
                'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnVzaW5lc3N8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
            post:
                '# Inmitem saucius deum ait Epidauria modo\n\n## Contraque longa quasque verbere miratur vultus\n\nLorem markdownum pontusque tinctas. Moras si fluminaque huic. Stabis non genuum\nprimus, valeant insula mollia?\n\n## Facit petunt Ulixem quae natis\n\nNec ingenium collocat moriturus refert. Rediit ab belli vincere; arat in nomine\nadspice. Qui valido: albo fecerat en tumulo adsit, arma lugendae.\n\n1. Myrtea dedit\n2. In pedis\n3. Iuppiter quisquis tamen caliginis conspexit suis fremebant\n4. Visamque Lyncus\n5. Ferit carmina post\n6. Sparsi madidum temone vidisset dabat\n\n## Certa foliis rogantum\n\nCaelobracchia opus veneni non inquit: intenta quod coacti, est **tangit**\ntandemque scopulum; caesorum de ultimus quodque suus? [Mandataque arboris\nconplent](http://dumcultu.com/possidet.php) saepe admoto; decipit quam, veteris\n**per cuperet** Dauni? Vix conpellat; locus duobus prospiciens gemitu\nPleionesque Aphareus; in non carinae unius nunc, quod! Incaluit dolores, Smilace\nqua praeda fores: [qua dixit](http://nata-furtum.io/lacon.php) erat ipsoque.\n\n-   Et populo\n-   Paene ecce manibusque\n-   Vicinia thalamis quoque\n-   Cervice exanimi fluminis si metu\n\n## Ablata natum et tibi vetito inferiora Troiae\n\nConcrevit Neptunia: et delphines volucrem **massae una** temeraria dixi\nmontibus. Famulumque materque: **movet suo** silva foret balteus temperat\ncaecisque cives cantibus sed fessus, sed quoque membra conplexi. Alto mea\nnocuit, convivia nunc medius simulacraque paucis. Non in signumque munus plenis\nMartem pugnavique carina Martis; mihi.\n\n## Sceleris in\n\nTollens nitidi, dari, elususque pelle certasse, quaeque ac caelo timido\nexponimur pondere frustraque **obicit**. **In ubi** aequore simulatas conatoque\ndomus cum, si ipsumque fidem nulla, demisso? Taurorum pecudes iter regis\nregemque citharae mors haec modum, scylla illud superest i Hector nantemque\nsacris; decursus.\n\nQuisque alas patebant terra nurusque et nubilis Phoebo nomenque tiliae et.\nGuttae oculis flores tuque: fertur fontibus votorum, in curas terras _caelo_,\ncupit.\n\nIn cura sui sic neglectos alatur, cadentem thalamis\n[nostra](http://tenet.org/talia.html) et reposcunt, vestram molliet _pronus_.\nRetenta mari [ore](http://www.fessusque-procul.com/) Troes ense sedet dextra\ninnixusque tuam; lenius. Ultro ore committitur undis, functo manifestam sacra\nademi; _qui altus_. Deos novo volandi, et orantem saepe exiguo doluit. Terrore\nPallas, ramis flexipedes videtur Oenopiam quoque?\n',
            publicationDate: new Date().toString(),
            readingTime: 6,
            slug: 'popular-business-schools',
            tag: 'School',
            title: 'The 10 most popular business schools'
        };

        const suggestedPosts = [
            {
                author: {
                    name: 'Ying Zhang',
                    picture:
                        'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                },
                description:
                    'Inmitem saucius deum ait Epidauria modo. Contraque longa quasque verbere miratur vultus Lorem markdownum pontusque tinctas...',
                id: 2,
                image:
                    'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bGlmZXN0eWxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                post:
                    '# Inmitem saucius deum ait Epidauria modo\n\n## Contraque longa quasque verbere miratur vultus\n\nLorem markdownum pontusque tinctas. Moras si fluminaque huic. Stabis non genuum\nprimus, valeant insula mollia?\n\n## Facit petunt Ulixem quae natis\n\nNec ingenium collocat moriturus refert. Rediit ab belli vincere; arat in nomine\nadspice. Qui valido: albo fecerat en tumulo adsit, arma lugendae.\n\n1. Myrtea dedit\n2. In pedis\n3. Iuppiter quisquis tamen caliginis conspexit suis fremebant\n4. Visamque Lyncus\n5. Ferit carmina post\n6. Sparsi madidum temone vidisset dabat\n\n## Certa foliis rogantum\n\nCaelobracchia opus veneni non inquit: intenta quod coacti, est **tangit**\ntandemque scopulum; caesorum de ultimus quodque suus? [Mandataque arboris\nconplent](http://dumcultu.com/possidet.php) saepe admoto; decipit quam, veteris\n**per cuperet** Dauni? Vix conpellat; locus duobus prospiciens gemitu\nPleionesque Aphareus; in non carinae unius nunc, quod! Incaluit dolores, Smilace\nqua praeda fores: [qua dixit](http://nata-furtum.io/lacon.php) erat ipsoque.\n\n-   Et populo\n-   Paene ecce manibusque\n-   Vicinia thalamis quoque\n-   Cervice exanimi fluminis si metu\n\n## Ablata natum et tibi vetito inferiora Troiae\n\nConcrevit Neptunia: et delphines volucrem **massae una** temeraria dixi\nmontibus. Famulumque materque: **movet suo** silva foret balteus temperat\ncaecisque cives cantibus sed fessus, sed quoque membra conplexi. Alto mea\nnocuit, convivia nunc medius simulacraque paucis. Non in signumque munus plenis\nMartem pugnavique carina Martis; mihi.\n\n## Sceleris in\n\nTollens nitidi, dari, elususque pelle certasse, quaeque ac caelo timido\nexponimur pondere frustraque **obicit**. **In ubi** aequore simulatas conatoque\ndomus cum, si ipsumque fidem nulla, demisso? Taurorum pecudes iter regis\nregemque citharae mors haec modum, scylla illud superest i Hector nantemque\nsacris; decursus.\n\nQuisque alas patebant terra nurusque et nubilis Phoebo nomenque tiliae et.\nGuttae oculis flores tuque: fertur fontibus votorum, in curas terras _caelo_,\ncupit.\n\nIn cura sui sic neglectos alatur, cadentem thalamis\n[nostra](http://tenet.org/talia.html) et reposcunt, vestram molliet _pronus_.\nRetenta mari [ore](http://www.fessusque-procul.com/) Troes ense sedet dextra\ninnixusque tuam; lenius. Ultro ore committitur undis, functo manifestam sacra\nademi; _qui altus_. Deos novo volandi, et orantem saepe exiguo doluit. Terrore\nPallas, ramis flexipedes videtur Oenopiam quoque?\n',
                publicationDate: new Date().toString(),
                readingTime: 10,
                slug: 'professional-and-personal-life',
                tag: 'Life',
                title: 'Find your balance between professional and personal life'
            },
            {
                author: {
                    name: 'Clémence Pirault',
                    picture:
                        'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                },
                description:
                    'Inmitem saucius deum ait Epidauria modo. Contraque longa quasque verbere miratur vultus Lorem markdownum pontusque tinctas...',
                id: 3,
                image:
                    'https://images.unsplash.com/photo-1579403124614-197f69d8187b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwZGV2fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                post:
                    '# Inmitem saucius deum ait Epidauria modo\n\n## Contraque longa quasque verbere miratur vultus\n\nLorem markdownum pontusque tinctas. Moras si fluminaque huic. Stabis non genuum\nprimus, valeant insula mollia?\n\n## Facit petunt Ulixem quae natis\n\nNec ingenium collocat moriturus refert. Rediit ab belli vincere; arat in nomine\nadspice. Qui valido: albo fecerat en tumulo adsit, arma lugendae.\n\n1. Myrtea dedit\n2. In pedis\n3. Iuppiter quisquis tamen caliginis conspexit suis fremebant\n4. Visamque Lyncus\n5. Ferit carmina post\n6. Sparsi madidum temone vidisset dabat\n\n## Certa foliis rogantum\n\nCaelobracchia opus veneni non inquit: intenta quod coacti, est **tangit**\ntandemque scopulum; caesorum de ultimus quodque suus? [Mandataque arboris\nconplent](http://dumcultu.com/possidet.php) saepe admoto; decipit quam, veteris\n**per cuperet** Dauni? Vix conpellat; locus duobus prospiciens gemitu\nPleionesque Aphareus; in non carinae unius nunc, quod! Incaluit dolores, Smilace\nqua praeda fores: [qua dixit](http://nata-furtum.io/lacon.php) erat ipsoque.\n\n-   Et populo\n-   Paene ecce manibusque\n-   Vicinia thalamis quoque\n-   Cervice exanimi fluminis si metu\n\n## Ablata natum et tibi vetito inferiora Troiae\n\nConcrevit Neptunia: et delphines volucrem **massae una** temeraria dixi\nmontibus. Famulumque materque: **movet suo** silva foret balteus temperat\ncaecisque cives cantibus sed fessus, sed quoque membra conplexi. Alto mea\nnocuit, convivia nunc medius simulacraque paucis. Non in signumque munus plenis\nMartem pugnavique carina Martis; mihi.\n\n## Sceleris in\n\nTollens nitidi, dari, elususque pelle certasse, quaeque ac caelo timido\nexponimur pondere frustraque **obicit**. **In ubi** aequore simulatas conatoque\ndomus cum, si ipsumque fidem nulla, demisso? Taurorum pecudes iter regis\nregemque citharae mors haec modum, scylla illud superest i Hector nantemque\nsacris; decursus.\n\nQuisque alas patebant terra nurusque et nubilis Phoebo nomenque tiliae et.\nGuttae oculis flores tuque: fertur fontibus votorum, in curas terras _caelo_,\ncupit.\n\nIn cura sui sic neglectos alatur, cadentem thalamis\n[nostra](http://tenet.org/talia.html) et reposcunt, vestram molliet _pronus_.\nRetenta mari [ore](http://www.fessusque-procul.com/) Troes ense sedet dextra\ninnixusque tuam; lenius. Ultro ore committitur undis, functo manifestam sacra\nademi; _qui altus_. Deos novo volandi, et orantem saepe exiguo doluit. Terrore\nPallas, ramis flexipedes videtur Oenopiam quoque?\n',
                publicationDate: new Date().toString(),
                readingTime: 4,
                slug: 'reconversion-web-development',
                tag: 'Experience',
                title: 'My reconversion in web development'
            },
            {
                author: {
                    name: 'Paul Cailly',
                    picture:
                        'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
                },
                description:
                    'Inmitem saucius deum ait Epidauria modo. Contraque longa quasque verbere miratur vultus Lorem markdownum pontusque tinctas...',
                id: 4,
                image:
                    'https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8d29ya3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
                post:
                    '# Inmitem saucius deum ait Epidauria modo\n\n## Contraque longa quasque verbere miratur vultus\n\nLorem markdownum pontusque tinctas. Moras si fluminaque huic. Stabis non genuum\nprimus, valeant insula mollia?\n\n## Facit petunt Ulixem quae natis\n\nNec ingenium collocat moriturus refert. Rediit ab belli vincere; arat in nomine\nadspice. Qui valido: albo fecerat en tumulo adsit, arma lugendae.\n\n1. Myrtea dedit\n2. In pedis\n3. Iuppiter quisquis tamen caliginis conspexit suis fremebant\n4. Visamque Lyncus\n5. Ferit carmina post\n6. Sparsi madidum temone vidisset dabat\n\n## Certa foliis rogantum\n\nCaelobracchia opus veneni non inquit: intenta quod coacti, est **tangit**\ntandemque scopulum; caesorum de ultimus quodque suus? [Mandataque arboris\nconplent](http://dumcultu.com/possidet.php) saepe admoto; decipit quam, veteris\n**per cuperet** Dauni? Vix conpellat; locus duobus prospiciens gemitu\nPleionesque Aphareus; in non carinae unius nunc, quod! Incaluit dolores, Smilace\nqua praeda fores: [qua dixit](http://nata-furtum.io/lacon.php) erat ipsoque.\n\n-   Et populo\n-   Paene ecce manibusque\n-   Vicinia thalamis quoque\n-   Cervice exanimi fluminis si metu\n\n## Ablata natum et tibi vetito inferiora Troiae\n\nConcrevit Neptunia: et delphines volucrem **massae una** temeraria dixi\nmontibus. Famulumque materque: **movet suo** silva foret balteus temperat\ncaecisque cives cantibus sed fessus, sed quoque membra conplexi. Alto mea\nnocuit, convivia nunc medius simulacraque paucis. Non in signumque munus plenis\nMartem pugnavique carina Martis; mihi.\n\n## Sceleris in\n\nTollens nitidi, dari, elususque pelle certasse, quaeque ac caelo timido\nexponimur pondere frustraque **obicit**. **In ubi** aequore simulatas conatoque\ndomus cum, si ipsumque fidem nulla, demisso? Taurorum pecudes iter regis\nregemque citharae mors haec modum, scylla illud superest i Hector nantemque\nsacris; decursus.\n\nQuisque alas patebant terra nurusque et nubilis Phoebo nomenque tiliae et.\nGuttae oculis flores tuque: fertur fontibus votorum, in curas terras _caelo_,\ncupit.\n\nIn cura sui sic neglectos alatur, cadentem thalamis\n[nostra](http://tenet.org/talia.html) et reposcunt, vestram molliet _pronus_.\nRetenta mari [ore](http://www.fessusque-procul.com/) Troes ense sedet dextra\ninnixusque tuam; lenius. Ultro ore committitur undis, functo manifestam sacra\nademi; _qui altus_. Deos novo volandi, et orantem saepe exiguo doluit. Terrore\nPallas, ramis flexipedes videtur Oenopiam quoque?\n',
                publicationDate: new Date().toString(),
                readingTime: 8,
                slug: 'remote-get-organized',
                tag: 'Work',
                title: 'Remote, how to get organized'
            }
        ];

        render(<Post post={post} suggestedPosts={suggestedPosts} />);

        const title = screen.getByText('The 10 most popular business schools');

        expect(title).toBeInTheDocument();
    });
});
