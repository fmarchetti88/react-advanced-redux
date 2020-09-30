import React from 'react';
import { Subtract } from 'utility-types';
import { getItems } from '../services/TestService';

interface WithStringDataProps {
  items: string[];
}

export default function withStringData<T extends WithStringDataProps>(Component: React.ComponentType<T>) {
  class WrappingComponent extends React.Component<Subtract<T, WithStringDataProps>> {
    state = { items: [] as string[] };

    async componentDidMount() {
      const items = await getItems();
      this.setState({ items });
    }

    public render() {
      return <Component {...(this.props as T)} items={this.state.items} />;
    }
  }

  const componentDisplayName = Component.displayName || Component.name || 'Component';
  (WrappingComponent as any).displayName = `withStringData(${componentDisplayName})`;
  return WrappingComponent;
}
