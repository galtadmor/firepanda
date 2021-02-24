import React from 'react';

import { fs } from './firebase';

export class List extends React.Component<{}, any>{

  state = {
    items: [],
    title: '',
    loading: false
  }

  componentDidMount() {
    fs.collection('posts').onSnapshot((snapshot) => {
      const items: any[] = [];
      snapshot.forEach((item) => items.push(item.data()));
      this.setState({
        items,
        loading: false
      });
    })
  }

  onAddItemClick = () => {
    const { title } = this.state;
    this.setState({
      loading: true
    });
    fs.collection('posts').add({
      title,
      createdAt: +new Date()
    })
      .then(() => {
        this.setState({
          loading: false,
          title: ''
        });
      });
  }

  render(){
    const { items, title, loading } = this.state;
    if (loading) {
      return <h3>Loading...</h3>
    }
    return (
      <div>
        <hr />
        {!items.length ? (
          <h3>No items</h3>
        ) : (
          <ul>
            {items.map((item: any, index: number) => {
              return (
                <li key={index}>{item.title} ({item.createdAt})</li>
              );
            })}
          </ul>
        )}
        <hr />
        <input value={title} onChange={(e) => this.setState({ title: e.target.value})} />
        <button onClick={this.onAddItemClick}>Add item</button>
        <hr />
      </div>
    )
  }
}