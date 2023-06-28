import React from 'react';
import renderer from 'react-test-renderer';
import MissionsView from '../../components/Missions/missionsDisplay';

describe('MissionsView component', () => {
  it('should render correctly when loading', () => {
    const component = renderer.create(
      <MissionsView
        missions={[]}
        isLoading
        error={null}
        handleJoinMission={() => {}}
        handleLeaveMission={() => {}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly when there is an error', () => {
    const error = 'An error occurred.';
    const component = renderer.create(
      <MissionsView
        missions={[]}
        isLoading={false}
        error={error}
        handleJoinMission={() => {}}
        handleLeaveMission={() => {}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly with mission data', () => {
    const missions = [
      {
        mission_id: 1,
        mission_name: 'Mission 1',
        description: 'Description 1',
        reserved: true,
      },
      {
        mission_id: 2,
        mission_name: 'Mission 2',
        description: 'Description 2',
        reserved: false,
      },
    ];
    const component = renderer.create(
      <MissionsView
        missions={missions}
        isLoading={false}
        error={null}
        handleJoinMission={() => {}}
        handleLeaveMission={() => {}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
