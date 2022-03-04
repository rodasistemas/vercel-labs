import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "../App"
import { Sidebar } from '../components/Layout'
/*
import {rest} from 'msw'
import {setupServer} from 'msw/node'
const server = setupServer(
    rest.get('/greeting', (req, res, ctx) => {
      return res(ctx.json({greeting: 'hello there'}))
    }),
  )

  beforeAll(() => server.listen())
  afterEach(() => server.resetHandlers())
  afterAll(() => server.close())
*/
  describe('[App]',()=>{
      it('render all page',()=>{
          render(<App/>)
          expect(screen.getByRole('banner')).toBeInTheDocument();
      })
      it('sidebar state',()=>{
          render(<Sidebar/>)
          expect(screen.getByRole('sidebar')).toHaveTextContent(/menu/i)
        })
        it('sidebar event',()=>{
          const {container} = render(<Sidebar className="test"/>);
          const buttonMock = screen.getByRole('button');
          const eventMock = fireEvent(buttonMock,new MouseEvent('click',{bubbles: true, cancelable:true}));
          expect(eventMock).toBeTruthy()
          expect(container).toMatchSnapshot()
      })
      it('snapshot',()=>{
          const {container} = render(<App/>);
          // eslint-disable-next-line testing-library/no-debugging-utils
          expect(container).toMatchSnapshot()
      })
  })
