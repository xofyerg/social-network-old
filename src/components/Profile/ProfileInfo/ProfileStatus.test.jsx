import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state!", () => {
    const component = create(<ProfileStatus status="sassus amogus" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("sassus amogus");
  });
  test("after creation <span> with status should be displayed with correct status", () => {
    const component = create(<ProfileStatus status="sassus amogus" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="sassus amogus" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });
  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="sassus amogus" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("sassus amogus");
  });

  test("input should be displayed in editMode instead of span", () => {
    const component = create(<ProfileStatus status="sassus amogus" />);
    const root = component.root;
    let span = root.findByType("span"); // находим span
    span.props.onDoubleClick(); // нажимаем на span
    let input = root.findByType("input"); // появляется input
    expect(input.props.value).toBe("sassus amogus");
  });

  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const component = create(
      <ProfileStatus status="sassus amogus" updateStatus={mockCallback} />
    );
    const instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
