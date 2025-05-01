import React from 'react'

interface TokensGridProps {
  tokens: Record<string, string>
}

export const TokensGrid: React.FC<TokensGridProps> = ({ tokens }) => (
  <table>
    <thead>
      <tr>
        <th>name</th>
        <th>value</th>
      </tr>
    </thead>

    <tbody>
      {Object.entries(tokens).map(([key, value]) => (
        <tr key={key}>
          <td>{key}</td>
          <td>{value}</td>
        </tr>
      ))}
    </tbody>
  </table>
)