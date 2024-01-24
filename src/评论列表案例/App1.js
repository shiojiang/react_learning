import React from 'react';
import './App.css';
class App extends React.Component {
  // 初始化状态
  state  = {
    comments: [
      // {
      //   id: 1, name: '张三', comment: '沙发~~~~~~~'
      // },
      // {
      //   id: 2, name: '李四', comment: '板凳!!'
      // },
      // {
      //   id: 3, name: '王五', comment: '我爱张三~~~'
      // }
    ],
    // 表单绑定输入数据
    userName: '',
    userComment: ''
  }
  // 渲染评论区
  renderComments() {
    const { comments } = this.state
    return comments.length === 0 ?
      (<div className="no-comment">暂无评论</div>) :
      (
        <ul>
          {comments.map(item => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.comment}</p>
            </li>
          ))}
        </ul>
      )
  }
  // 处理表单元素值
  handleForm = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]:  value
    })
  }
  // 发表评论
  handleSubmit = () => {
    const { comments, userName, userComment } = this.state
    if (userName.trim() === '' || userComment.trim() === '') {
      alert('请输入用户名和评论内容')
      return
    }
    this.setState({
      comments: [...comments, { id: Math.random(), name: userName, comment: userComment }],
      userName: '',
      userComment: ''
    })
  }

  render() {
    const { userName, userComment } = this.state
    return (
      <div className="comment-wrapper">
        {/* 表单区 */}
        <div>
          <input 
            className="user"
            type="text"
            placeholder="请输入评论人"
            name= "userName"
            value={userName}
            onChange={this.handleForm} />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            name="userComment"
            value={userComment}
            onChange={this.handleForm}>
          </textarea>
          <br />
          <button onClick={this.handleSubmit}>发表评论</button>
          <br />
        </div>
        {/* 评论区 */}
        { this.renderComments() }
      </div>
    )
  }
}

export default App;
