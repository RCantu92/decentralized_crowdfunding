import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';

class CampaignNew extends Component {
    state = {
        minmumContribution: ''
    };

    render() {
        return (
            <Layout>
                <h3>Create a campaign</h3>

                <Form>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input 
                            label="wei" 
                            labelPosition="right"
                            value={this.state.minmumContribution}
                            onChange={event => this.setState({ minmumContribution: event.target.value })}
                        />
                    </Form.Field>

                    <Button primary>Create!</Button>
                </Form>
            </Layout>
        );
    };
}

export default CampaignNew;