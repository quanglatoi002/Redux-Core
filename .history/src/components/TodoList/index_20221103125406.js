import { Col, Row, Input, Button, Select, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Todo from "../Todo";
import { todosRemainingSelector } from "../../redux/selectors";
import { addNewTodo } from "./todosSlice";

export default function TodoList() {
    const [todoName, setTodoName] = useState("");
    const [priority, setPriority] = useState("Medium");

    const todoList = useSelector(todosRemainingSelector);
    const dispatch = useDispatch();
    //handle
    const handleAddButtonClick = () => {
        dispatch(
            addNewTodo({
                id: uuidv4(),
                name: todoName,
                priority: priority,
                completed: false,
            })
        );
        // }));
        // dispatch(
        //     addTodos({
        //         id: uuidv4(),
        //         name: todoName,
        //         priority: priority,
        //         completed: false,
        //     })
        // );
        setTodoName("");
        setPriority("Medium");
    };

    const handleInputChange = (e) => {
        console.log("handleInputChange", e.target.value);
        setTodoName(e.target.value);
    };
    const handlePriorityChange = (value) => {
        setPriority(value);
    };

    return (
        <Row style={{ height: "calc(100% - 40px)" }}>
            <Col
                span={24}
                style={{ height: "calc(100% - 40px)", overflowY: "auto" }}
            >
                {/* take data in todoList and load by ever index[]  */}
                {todoList.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        name={todo.name}
                        priority={todo.priority}
                        completed={todo.completed}
                    />
                ))}
            </Col>
            <Col span={24}>
                <Input.Group style={{ display: "flex" }} compact>
                    <Input value={todoName} onChange={handleInputChange} />
                    <Select
                        defaultValue="Medium"
                        value={priority}
                        onChange={handlePriorityChange}
                    >
                        <Select.Option value="High" label="High">
                            <Tag color="red">High</Tag>
                        </Select.Option>
                        <Select.Option value="Medium" label="Medium">
                            <Tag color="blue">Medium</Tag>
                        </Select.Option>
                        <Select.Option value="Low" label="Low">
                            <Tag color="gray">Low</Tag>
                        </Select.Option>
                    </Select>
                    <Button type="primary" onClick={handleAddButtonClick}>
                        Add
                    </Button>
                </Input.Group>
            </Col>
        </Row>
    );
}
