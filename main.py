import webapp2

from streams_handler import StreamsHandler
from frames_handler import FramesHandler

app = webapp2.WSGIApplication([
    ('/api/streams', StreamsHandler),
    ('/api/frames', FramesHandler),
], debug=True)
