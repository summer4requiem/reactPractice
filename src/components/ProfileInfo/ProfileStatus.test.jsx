import React from 'react'
import { create } from "react-test-renderer";
import ProfileStatusClass from './ProfileStatus';

describe('Profile status component', () => {
    test(`status from props should be in state`, () => {
        const component = create(<ProfileStatusClass status="hey hey hey"/>);
        const instance = component.root;
        expect(instance.state.status).toBe("hey hey hey");
    });

    test(`there's should be a span element in the component`, () => {
        const component = create(<ProfileStatusClass status="hey hey hey"/>);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span.length).not.toBeNull();
    });

    test(`after creation <input> shouldn't be displayed`, () => {
        const component = create(<ProfileStatusClass status="hey hey hey"/>);
        const instance = component.root;
        expect(()=>{
            instance.findByType("input")
        }).toThrow();
    });

    test(`after creation <span> should contain correct status`, () => {
        const component = create(<ProfileStatusClass status="hey hey hey"/>);
        const instance = component.root;
        let span = instance.findByType("span");
        expect(span.children[0]).toBe("hey hey hey");
    });

    test(`input should be displayed in activated EditMode <unput> instead of span`, () => {// then DoubleClicked
        const component = create(<ProfileStatusClass status="hey hey hey"/>);
        const root = component.root;
        let li = root.findByType("li");
        li.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("hey hey hey");
        // expect(root.state.editorMode).toBe(true);
    });

    test(`callback should be called`, () => {// then DoubleClicked
        const component = create(<ProfileStatusClass updateStatus = {()=>{}} status="hey hey hey"/> );
        const instance = component.getInstance();
        instance.deActivateEditMode();
        // let li = root.findByType("li");
        // li.props.onDoubleClick();
        // let input = root.findByType("input");
        // expect(input.props.value).toBe("hey hey hey");
        // expect(root.state.editorMode).toBe(true);
    });
});
