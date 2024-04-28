import React from 'react';
import { Provider } from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import configureStore from 'redux-mock-store';
import MeetingList from '../src/components/BookingForm/MeetingList';
import CreateMeetingModal from '../src/components/BookingForm/MeetingCreate';

const initialState = {
  auth: {
    user: null,
    isLoggedIn: true,
    loading: false,
    error: null
  },
  user: {
    users: [
      {
        _id: '65ee0542c9d395ac848d5576',
        username: 'test63@example.com',
        role: 'standard_user',
        firstName: '',
        lastName: '',
        createdAt: '2024-03-10T19:08:50.673Z',
        updatedAt: '2024-03-10T19:08:50.673Z',
        __v: 0
      },
      {
        _id: '65f8b3565c5b6f375efad1a9',
        username: 'test62@example.com',
        role: 'standard_user',
        firstName: '',
        lastName: '',
        createdAt: '2024-03-18T21:34:14.654Z',
        updatedAt: '2024-03-18T21:34:14.654Z',
        __v: 0
      },
      {
        _id: '660d94757d588f20b47bc2e6',
        username: 'keuchakian@gmail.com',
        role: 'standard_user',
        firstName: 'Juan Manuel',
        lastName: 'Ortiz',
        createdAt: '2024-04-03T17:40:05.805Z',
        updatedAt: '2024-04-03T17:40:05.805Z',
        __v: 0
      },
      {
        _id: '660d95267d588f20b47bc2ef',
        username: 'keuchakian2@gmail.com',
        role: 'standard_user',
        firstName: 'Juan Manuel 3',
        lastName: 'Ortiz',
        createdAt: '2024-04-03T17:43:02.043Z',
        updatedAt: '2024-04-03T17:43:02.043Z',
        __v: 0
      },
      {
        _id: '660d96717d588f20b47bc2f7',
        username: 'keuchakian4@gmail.com',
        role: 'standard_user',
        firstName: 'Juan Manuel 4',
        lastName: 'Ortiz',
        createdAt: '2024-04-03T17:48:33.032Z',
        updatedAt: '2024-04-03T17:48:33.032Z',
        __v: 0
      },
      {
        _id: '660d98227d588f20b47bc305',
        username: 'keuchakian5@gmail.com',
        role: 'standard_user',
        firstName: 'Juan Manuel 6',
        lastName: 'Ortiz',
        createdAt: '2024-04-03T17:55:46.132Z',
        updatedAt: '2024-04-03T17:55:46.132Z',
        __v: 0
      }
    ],
    loading: false,
    error: null,
    form: {},
    success: false
  },
  param: {
    params: [
      {
        _id: '660eecc4a8fe92a343ab9f90',
        __v: 0
      },
      {
        _id: '660eedd4a8fe92a343ab9f9f',
        paramValue: 'sd',
        description: 'sa',
        __v: 0
      }
    ],
    loading: false,
    error: null,
    form: {},
    success: false
  },
  meeting: {
    meeting: [
      {
        _id: '66103b99bd5b78c65fbdf957',
        participants: [],
        __v: 0
      },
      {
        _id: '661c15855ff53cb6a8a97ee2',
        title: 't',
        description: 't',
        startTime: '2023-04-05T09:00:00.000Z',
        endTime: '2023-04-05T10:00:00.000Z',
        zoomRoomId: '2',
        organizerUserId: '2',
        participants: [
          '2'
        ],
        __v: 0
      },
      {
        _id: '661c159e5ff53cb6a8a97ee5',
        title: 's',
        description: '2',
        startTime: '2023-04-05T09:00:00.000Z',
        endTime: '2023-04-05T10:00:00.000Z',
        zoomRoomId: '4',
        organizerUserId: '56',
        participants: [
          '2'
        ],
        __v: 0
      },
      {
        _id: '661c163c0e66a70ad7e0a18a',
        title: 'SF',
        description: 'S',
        startTime: '2023-04-05T09:00:00.000Z',
        endTime: '2023-04-05T10:00:00.000Z',
        zoomRoomId: '2',
        organizerUserId: '5',
        participants: [
          '2'
        ],
        __v: 0
      },
      {
        _id: '661c174f88a63eddc7c2120f',
        title: 's',
        description: 'S',
        startTime: '2023-04-05T09:00:00.000Z',
        endTime: '2023-04-05T10:00:00.000Z',
        zoomRoomId: '4',
        organizerUserId: '5',
        participants: [
          '64'
        ],
        __v: 0
      },
      {
        _id: '661c1c0688a63eddc7c21216',
        title: 'test',
        description: 't',
        startTime: '2023-04-05T09:00:00.000Z',
        endTime: '2023-04-05T10:00:00.000Z',
        zoomRoomId: '1',
        organizerUserId: '1',
        participants: [
          '2'
        ],
        __v: 0
      },
      {
        _id: '661c1e3188a63eddc7c21219',
        title: 'tstt',
        description: '2',
        startTime: '2023-04-05T09:00:00.000Z',
        endTime: '2023-04-05T10:00:00.000Z',
        zoomRoomId: '4',
        organizerUserId: '2',
        participants: [
          '3'
        ],
        __v: 0
      },
      {
        _id: '661e5c2988a63eddc7c2121d',
        participants: [],
        __v: 0
      },
      {
        _id: '661e5c7788a63eddc7c21220',
        title: 'asd',
        description: 'asd',
        startTime: '2023-04-05T09:00:00.000Z',
        endTime: '2023-04-05T10:00:00.000Z',
        zoomRoomId: '4',
        organizerUserId: '5',
        participants: [
          '64'
        ],
        __v: 0
      },
      {
        _id: '661e66f888a63eddc7c2123b',
        title: 'test',
        description: 'testtttttttttsadasdasdasd',
        startTime: '2024-04-23T12:55:00.000Z',
        endTime: '2024-04-23T14:58:00.000Z',
        zoomRoomId: '4',
        organizerUserId: '5',
        participants: [
          '3'
        ],
        __v: 0
      },
      {
        _id: '661e673b88a63eddc7c21245',
        title: 'test al',
        description: 'asdasda',
        startTime: '2024-05-22T15:55:00.000Z',
        endTime: '2024-05-22T16:00:00.000Z',
        zoomRoomId: '4',
        organizerUserId: '1',
        participants: [
          '3'
        ],
        __v: 0
      },
      {
        _id: '66216f85453983e8592e9c07',
        title: 'adasd',
        description: 'asd',
        startTime: '2024-04-23T19:07:00.000Z',
        endTime: '2024-04-25T19:07:00.000Z',
        zoomRoomId: '4',
        organizerUserId: '56',
        participants: [
          '2'
        ],
        __v: 0
      }
    ],
    loading: false,
    error: null,
    form: {
      title: 'ststst',
      description: 'asd',
      startTime: '2024-04-22T23:11',
      endTime: '2024-04-26T21:11',
      zoomRoomId: '4',
      organizerUserId: '5',
      participants: '64'
    },
    success: false
  }
};

const mockStore = configureStore();

describe('MeetingList', () => {
  it('should display meetings when meetings are present', () => {
    const store = mockStore({
      meeting: {
        ...initialState.meeting,
        meeting: [
          {
            _id: '661c15855ff53cb6a8a97ee2',
            title: 'testing meetin xxxx',
            description: 't',
            startTime: '2023-04-05T09:00:00.000Z',
            endTime: '2023-04-05T10:00:00.000Z',
            zoomRoomId: '2',
            organizerUserId: '2',
            participants: ['224'],
            __v: 0
          },
          {
            _id: '661c159e5ff53cb6a8a97ee5',
            title: 'testing meetin zzzz',
            description: '2',
            startTime: '2023-04-05T09:00:00.000Z',
            endTime: '2023-04-05T10:00:00.000Z',
            zoomRoomId: '4',
            organizerUserId: '56',
            participants: ['2'],
            __v: 0
          }
        ]
      }
    });

    const { getByText } = render(
      <Provider store={store}>
        <MeetingList />
      </Provider>
    );

    expect(getByText('testing meetin xxxx')).toBeInTheDocument();
    expect(getByText('testing meetin zzzz')).toBeInTheDocument();
    expect(getByText('224')).toBeInTheDocument(); 
  });
});


describe('CreateMeetingModal', () => {
  it('should render with initial state values', () => {
    const initialState = {
      meeting: {
        form: {
          title: 'Initial Title',
          description: 'Initial Description',
          startTime: '2024-04-22T09:00',
          endTime: '2024-04-22T10:00',
          zoomRoomId: '12345',
          organizerUserId: 'user1',
          participants: 'user2'
        }
      }
    };
    const store = mockStore(initialState);

    const { getByLabelText } = render(
      <Provider store={store}>
        <CreateMeetingModal open={true} onClose={() => {}} handleChange={() => {}} handleCreateMeeting={() => {}} />
      </Provider>
    );

    expect(getByLabelText('Title').value).toBe('Initial Title');
    expect(getByLabelText('Description').value).toBe('Initial Description');
    expect(getByLabelText('Start Time').value).toBe('2024-04-22T09:00');
    expect(getByLabelText('End Time').value).toBe('2024-04-22T10:00');
    expect(getByLabelText('Zoom Room ID').value).toBe('12345');
    expect(getByLabelText('Organizer User ID').value).toBe('user1');
    expect(getByLabelText('Participants').value).toBe('user2');
  });

  it('should call handleChange on input change', () => {
    const handleChange = jest.fn();
    const initialState = {
      meeting: {
        form: {
          title: '',
          description: '',
          startTime: '',
          endTime: '',
          zoomRoomId: '',
          organizerUserId: '',
          participants: ''
        }
      }
    };
    const store = mockStore(initialState);

    const { getByLabelText } = render(
      <Provider store={store}>
        <CreateMeetingModal open={true} onClose={() => {}} handleChange={handleChange} handleCreateMeeting={() => {}} />
      </Provider>
    );

    fireEvent.change(getByLabelText('Title'), { target: { value: 'New Title' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'New Description' } });
    
    expect(handleChange).toHaveBeenCalledTimes(2);
  });

  it('should call handleCreateMeeting on button click', () => {
    const handleCreateMeeting = jest.fn();
    const initialState = {
      meeting: {
        form: {}
      }
    };
    const store = mockStore(initialState);

    const { getByText } = render(
      <Provider store={store}>
        <CreateMeetingModal open={true} onClose={() => {}} handleChange={() => {}} handleCreateMeeting={handleCreateMeeting} />
      </Provider>
    );

    fireEvent.click(getByText('Create'));
    expect(handleCreateMeeting).toHaveBeenCalled();
  });
});