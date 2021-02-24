import { SearchSchoolsQuery } from '@applyfuture/graphql';
import Table from '@components/schools/Table';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';

const mockedData = ({
    searchSchools: {
        items: [
            {
                city: 'Paris',
                contactEmail: null,
                contactJobTitle: null,
                contactName: null,
                contactPhone: null,
                contractStatus: 'CONTACTED',
                country: 'FR',
                coverPhoto: '10d77697-2165-4b89-bb3c-a57f81e9c9d0',
                createdAt: '2020-09-18T11:05:22.059Z',
                creationYear: '1871',
                description:
                    '### Overview↵↵The École de Management de Normandie (also known as EM Normandie) is a business school created in 1871. Incorporated as a Higher Education & Research non-profit association (under the 1901 Act) and operating under private law, it has campuses in Caen, Dublin, Le Havre, Oxford and Paris. It is one of the oldest business schools in France. It holds EPAS, EQUIS, and AACSB accreditations. In 2015, EM Normandie was selected to appear in the ranking of the Financial Times of the best masters in management in the world (69th).↵↵In January 2013, EM Normandie launched its new “Values & Performance” Strategic Plan, to guarantee further strategic consistency, to capitalize on its multi-campus experience, to apply active learning, and to serve the Normandy territory in partnership with its entire business community. This has brought new dimensions to the School’s ambitions and reputation, thanks to the La SmartEcole® project and further partnerships with the University of Caen Normandy and the Grenoble School of Management.↵↵### International↵EM Normandie has more than 200 partner universities around the world (such as Nottingham Trent University, Nanyang Tecnological University, Instituto Tecnológico y de Estudios Superiores de Monterrey, Universidad Complutense, Universidad Diego Portales, Politecnico di Milano, University of Gothenburg, KU Leuven, Curtin University, University of North Florida, Hong Kong Baptist University), in more than 50 different countries, in which a student can be allowed to spend one or two semesters as an exchange student. 9 Foreign Languages are taught in the 5 campus. Approximately 730 international students are hosted every year. More than 30% of the full-time faculty are foreign. It offers the possibility to follow undergraduate and postgraduate programmes 100% in English.↵↵Moreover, EM Normandie has two campuses abroad: one in Oxford, UK and the other one in Dublin, Ireland. In both campuses, the courses are taught 100% in English.↵↵### Campuses↵The EM Normandie has 5 campuses, with three campuses based in Caen, Le Havre and Paris, and two campuses abroad in Oxford and Dublin.↵↵**Le Havre**↵↵Le Havre is a major French city located some 50 kilometres (31 miles) west of Rouen on the shore of the English Channel and at the mouth of the River Seine. Its port is the second largest in France, after Marseille, for total traffic, and the largest French container port. Le Havre Campus is the historic campus of EM Normandie.The old campus was located only 200 meters from the Marina. In September 2020, Le Havre Campus will open, it is at the heart of a maritime metropolis. This new campus is a new building of 12,700 m2 building, open and futuristic.↵↵**Caen**↵↵Caen is a commune in northwestern France. It is the prefecture of the Calvados department and the capital of the Lower Normandy region.↵↵Caen Campus in the second main campus of EM Normandie with 7000 square meters. It holds 5 amphitheaters, 5 computer rooms, 2 language laboratories, 1 media library, and many classrooms. In September 2016, EM Normandie built an extension of 2000 square meters to respond to its increasing activity in the Post-Bac selection.↵↵**Paris**↵↵The Paris campus is located in Paris 16th District. It receives undergraduate and postgraduate students.↵↵**Oxford**↵↵Oxford Campus is sharing buildings with the City of Oxford College (Activate Learning), it is close to transport links and the new Westgate Shopping Centre. It offers a café, a canteen, a gym, a library and a hair and beauty salon. All the courses are taught 100% in English. The prestigious Master Banking, Finance and FinTech is dispensed on this campus.↵↵**Dublin**↵↵Dublin Campus is located near the financial district. It is the second campus abroad which has been opened in 2017. All the courses are taught 100% in English.',
                id: 'fe2851b6-ef6c-439f-bf47-fc934d356511',
                institutionType: 'PRIVATE',
                internationalStudents: 700,
                logo: 'a340753b-28d6-40da-8f2c-72b5379ec66c',
                name: 'EM Normandie',
                programs: { nextToken: null },
                published: true,
                slug: 'em-normandie-paris',
                totalStudents: 4500,
                updatedAt: '2020-09-23T11:32:28.030Z'
            }
        ],
        nextToken: null
    }
} as unknown) as SearchSchoolsQuery;

describe('Table', () => {
    const handleContextMenu = jest.fn();
    const setVariables = jest.fn();

    it('can render without crashing', () => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const contractStatus = screen.getByText('CONTACTED');

        expect(contractStatus).toBeInTheDocument();
    });

    it('can search data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const searchInput = screen.getByPlaceholderText(/search/i);

        userEvent.type(searchInput, 'Paris');

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset search', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const searchInput = screen.getByPlaceholderText(/search/i);

        userEvent.type(searchInput, 'Paris');
        userEvent.clear(searchInput);

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can filter data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameFilterInput = screen.getAllByPlaceholderText(/filter/i)[1];

        userEvent.type(nameFilterInput, 'Paris');

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset filter', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameFilterInput = screen.getAllByPlaceholderText(/filter/i)[1];

        userEvent.type(nameFilterInput, 'Paris');
        userEvent.clear(nameFilterInput);

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can sort data', (done) => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const nameHeader = screen.getAllByRole('button')[2];

        act(() => {
            userEvent.click(nameHeader, undefined, { skipHover: true });
        });

        setTimeout(() => {
            done();
            expect(setVariables).toHaveBeenCalled();
        }, 2100);
    });

    it('can reset column width', () => {
        render(
            <Table
                data={mockedData}
                handleContextMenu={handleContextMenu}
                setVariables={setVariables}
            />
        );

        const resetWidthsButton = screen.getAllByRole('button')[0];

        userEvent.click(resetWidthsButton);
    });
});
