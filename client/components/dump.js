<List>
  {messages.list.map(id => messages.entities[id]).map((m, i) =>
    <ListItem
      primaryText={m.text}
      secondaryText={m.username}
      key={`${i}:${m.id}`}
    />
  )}
</List>

<RaisedButton style={styles.raisedButton} secondary={true} label="Logout" onTouchTap={this.handleLogout.bind(this)} />




<Card>

  <CardHeader title="ChatApp" subtitle="v0.1"/>

  <List style={styles.listItem}>
    {messages.list.map(id => messages.entities[id]).map((m, i) =>
      <ListItem
        primaryText={m.text}
        secondaryText={m.username}
        key={`${i}:${m.id}`}
      />
    )}
  </List>

  <CardActions>
    <TextField hintText="Chat here" id="chatMsg"/>
    <FlatButton label="Send" onTouchTap={this.handleSend.bind(this)}/>
  </CardActions>

</Card>
