import React from 'react';
import { render} from '@testing-library/react';
import Shift from './components/Shift';

const fakeShift = {
    applicationIds: [],
    endDatetime: "2020-11-19T19:15:00+00:00",
    hourlyRate: 85,
    id: "1243",
    locum: null,
    practice: {id: "23314", name: "Grant Tree Medical Centre"},
    staffType: "gp",
    staffTypeId: "1",
    startDatetime: "2020-11-19T16:50:00+00:00",
    status: "POSTED"
}

test('renders the shift page', () => {
    const { getByText, getAllByText } = render(<Shift shift={fakeShift}/>);
    const rate = getByText(/GBP [0-9]{2,}/i );
    const time = getAllByText(/[0-9]{2}.[0-9]{2}.[0-9]{2}/i);
    expect(rate).toBeInTheDocument();
    expect(time[0]).toBeInTheDocument();
    expect(time[1]).toBeInTheDocument();
});